
import time
from playwright.sync_api import sync_playwright

def verify_dashboard(page):
    print("Navigating to app...")
    page.goto("http://localhost:3000")

    # Wait for Auth Screen or Dashboard
    # If Auth Screen, enter password
    try:
        # Check if we are on Auth Screen (look for password input)
        # Note: Selectors are guessed based on standard UI, might need adjustment if implicit
        print("Waiting for potential Auth Screen...")
        # Expect an input of type password
        password_input = page.wait_for_selector("input[type='password']", timeout=5000)

        if password_input:
            print("Auth Screen found. Entering password...")
            password_input.fill("Motto1786")
            password_input.press("Enter")

            # Wait for dashboard
            print("Waiting for Dashboard...")
            page.wait_for_selector("text=TOPLAM NET VARLIK", timeout=10000)
    except Exception as e:
        print(f"Auth screen skipped or error: {e}")
        # Maybe we are already logged in? Check for dashboard text
        page.wait_for_selector("text=TOPLAM NET VARLIK", timeout=10000)

    print("Dashboard loaded. Taking screenshot...")
    # Wait a bit for animations
    time.sleep(2)
    page.screenshot(path="verification_dashboard.png")
    print("Screenshot saved to verification_dashboard.png")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            verify_dashboard(page)
        except Exception as e:
            print(f"Error: {e}")
            page.screenshot(path="verification_error.png")
        finally:
            browser.close()
