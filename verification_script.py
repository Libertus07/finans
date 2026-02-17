from playwright.sync_api import sync_playwright, expect
import time

def test_dashboard(page):
    print("Navigating to app...")
    page.goto("http://localhost:5173")

    print("Waiting for login screen...")
    # Expect "Motto Coffee" heading
    expect(page.get_by_role("heading", name="Motto Coffee")).to_be_visible(timeout=10000)

    print("Logging in...")
    # Find password input
    page.fill("input[type='password']", "Motto1786")

    # Click submit button. It might be the button "Giriş Yap".
    page.get_by_role("button", name="Giriş Yap").click()

    print("Waiting for dashboard...")
    # Wait for dashboard text "TOPLAM NET VARLIK"
    # This text is unique to dashboard
    expect(page.get_by_text("TOPLAM NET VARLIK")).to_be_visible(timeout=15000)

    # Wait a bit for charts to animate
    time.sleep(2)

    print("Taking screenshot...")
    page.screenshot(path="dashboard_verification.png")
    print("Screenshot saved to dashboard_verification.png")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            test_dashboard(page)
        except Exception as e:
            print(f"Error: {e}")
            page.screenshot(path="error_screenshot.png")
        finally:
            browser.close()
