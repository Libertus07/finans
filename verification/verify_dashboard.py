from playwright.sync_api import sync_playwright, expect
import time

def test_dashboard_load():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # 1. Go to app
        print("Navigating to app...")
        try:
            page.goto("http://localhost:5173", timeout=30000)
        except Exception as e:
            print(f"Failed to navigate: {e}")
            return

        # 2. Check for Auth Screen
        print("Waiting for Auth Screen...")
        try:
            page.wait_for_selector("text=Motto Coffee", timeout=10000)
        except Exception as e:
            print(f"Auth screen not found: {e}")
            page.screenshot(path="verification/error_auth.png")
            return

        # 3. Enter password
        print("Entering password...")
        try:
            page.fill("input[type='password']", "Motto1786")

            # 4. Click Login
            print("Clicking login...")
            page.click("button[type='submit']")
        except Exception as e:
            print(f"Failed to login: {e}")
            page.screenshot(path="verification/error_login.png")
            return

        # 5. Wait for Dashboard
        # It has a simulated delay of 800ms + loading state
        print("Waiting for Dashboard...")
        try:
            # Look for "Motto Yönetim Paneli"
            page.wait_for_selector("text=Motto Yönetim Paneli", timeout=20000)

            # 6. Verify Dashboard elements
            print("Verifying Dashboard elements...")
            # Use specific text locators to distinguish from login screen
            # "TOPLAM NET VARLIK" is on the dashboard
            expect(page.get_by_text("TOPLAM NET VARLIK")).to_be_visible()

            # 7. Screenshot
            print("Taking screenshot...")
            page.screenshot(path="verification/dashboard.png")
            print("Done!")

        except Exception as e:
            print(f"Dashboard not found: {e}")
            page.screenshot(path="verification/error_dashboard.png")

        browser.close()

if __name__ == "__main__":
    test_dashboard_load()
