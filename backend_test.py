import requests
import sys
from datetime import datetime
import json

class NeuralTrixAPITester:
    def __init__(self, base_url="https://business-clean.preview.emergentagent.com"):
        self.base_url = base_url
        self.api_url = f"{base_url}/api"
        self.tests_run = 0
        self.tests_passed = 0
        self.test_results = []

    def run_test(self, name, method, endpoint, expected_status, data=None):
        """Run a single API test"""
        url = f"{self.api_url}/{endpoint}"
        headers = {'Content-Type': 'application/json'}

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        print(f"URL: {url}")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, timeout=10)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers, timeout=10)

            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                try:
                    response_data = response.json()
                    print(f"Response: {json.dumps(response_data, indent=2)}")
                except:
                    print(f"Response: {response.text}")
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                print(f"Response: {response.text}")

            self.test_results.append({
                "name": name,
                "method": method,
                "endpoint": endpoint,
                "expected_status": expected_status,
                "actual_status": response.status_code,
                "success": success,
                "response": response.text[:200] if response.text else ""
            })

            return success, response.json() if success and response.text else {}

        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            self.test_results.append({
                "name": name,
                "method": method,
                "endpoint": endpoint,
                "expected_status": expected_status,
                "actual_status": "ERROR",
                "success": False,
                "error": str(e)
            })
            return False, {}

    def test_root_endpoint(self):
        """Test root API endpoint"""
        return self.run_test("Root API", "GET", "", 200)

    def test_contact_submission(self):
        """Test contact form submission"""
        test_data = {
            "first_name": "John",
            "last_name": "Doe", 
            "email": "john.doe@test.com",
            "phone": "+1-555-123-4567",
            "description": "Test contact form submission for NeuralTrix AI website"
        }
        
        success, response = self.run_test(
            "Contact Form Submission",
            "POST",
            "contact",
            200,
            data=test_data
        )
        
        if success and 'id' in response:
            print(f"✅ Contact submission created with ID: {response['id']}")
            return response['id']
        return None

    def test_get_contact_submissions(self):
        """Test getting contact submissions"""
        return self.run_test("Get Contact Submissions", "GET", "contact", 200)

    def test_status_check_creation(self):
        """Test status check creation"""
        test_data = {
            "client_name": "Test Client"
        }
        
        success, response = self.run_test(
            "Status Check Creation",
            "POST", 
            "status",
            200,
            data=test_data
        )
        
        if success and 'id' in response:
            print(f"✅ Status check created with ID: {response['id']}")
            return response['id']
        return None

    def test_get_status_checks(self):
        """Test getting status checks"""
        return self.run_test("Get Status Checks", "GET", "status", 200)

    def test_contact_validation(self):
        """Test contact form validation with missing fields"""
        invalid_data = {
            "first_name": "John",
            # Missing required fields
        }
        
        # This should fail validation on frontend, but backend might accept it
        # Let's test what happens
        return self.run_test(
            "Contact Form Validation (Missing Fields)",
            "POST",
            "contact", 
            422,  # Expecting validation error
            data=invalid_data
        )

def main():
    print("🚀 Starting NeuralTrix AI Backend API Tests")
    print("=" * 50)
    
    # Setup
    tester = NeuralTrixAPITester()
    
    # Run tests
    print("\n📡 Testing API Connectivity...")
    tester.test_root_endpoint()
    
    print("\n📝 Testing Contact Form API...")
    contact_id = tester.test_contact_submission()
    tester.test_get_contact_submissions()
    
    print("\n🔍 Testing Status Check API...")
    status_id = tester.test_status_check_creation()
    tester.test_get_status_checks()
    
    print("\n🛡️ Testing Validation...")
    tester.test_contact_validation()
    
    # Print results
    print("\n" + "=" * 50)
    print(f"📊 Test Results: {tester.tests_passed}/{tester.tests_run} passed")
    
    if tester.tests_passed == tester.tests_run:
        print("🎉 All tests passed!")
        return 0
    else:
        print("❌ Some tests failed!")
        print("\nFailed tests:")
        for result in tester.test_results:
            if not result['success']:
                error_msg = result.get('error', f'Status {result["actual_status"]}')
                print(f"  - {result['name']}: {error_msg}")
        return 1

if __name__ == "__main__":
    sys.exit(main())