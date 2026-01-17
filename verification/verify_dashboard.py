from playwright.sync_api import sync_playwright, expect

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        print("Navigating to home...")
        page.goto("http://localhost:5173/")

        # Wait for Password input
        print("Waiting for Password input...")
        password_input = page.get_by_placeholder("••••••••")
        expect(password_input).to_be_visible()

        # Enter password
        print("Entering password...")
        password_input.fill("Motto1786")

        # Click Login
        print("Clicking login...")
        login_btn = page.get_by_role("button", name="Giriş Yap")
        login_btn.click()

        # Wait for Dashboard content
        print("Waiting for Dashboard...")
        # Check for "Motto Yönetim Paneli"
        expect(page.get_by_text("Motto Yönetim Paneli")).to_be_visible(timeout=10000)

        # Take screenshot
        print("Taking screenshot...")
        page.screenshot(path="verification/dashboard.png")

        browser.close()

if __name__ == "__main__":
    run()
