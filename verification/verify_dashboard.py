from playwright.sync_api import sync_playwright, expect
import time

def test_dashboard_load(page):
    print("Navigating to home...")
    page.goto("http://localhost:5173")

    # Check if we are on login screen
    print("Waiting for login screen...")
    page.wait_for_selector("text=Yönetici Şifresi", timeout=10000)

    # Fill password
    print("Entering password...")
    page.fill("input[type='password']", "Motto1786")

    # Click Login
    print("Clicking login...")
    page.click("button[type='submit']")

    # Wait for Dashboard to load
    print("Waiting for dashboard...")
    page.wait_for_selector("text=TOPLAM NET VARLIK", timeout=20000)

    expect(page.get_by_text("Motto Yönetim Paneli")).to_be_visible()

    # Wait a bit for animations
    time.sleep(2)

    # Take screenshot
    print("Taking screenshot...")
    page.screenshot(path="verification/dashboard_verified.png")
    print("Done.")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            test_dashboard_load(page)
        except Exception as e:
            print(f"Error: {e}")
            page.screenshot(path="verification/error.png")
            raise
        finally:
            browser.close()
