from playwright.sync_api import sync_playwright, expect

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    page = browser.new_page()
    page.goto("http://localhost:5173/")

    # Wait for password input
    page.get_by_placeholder("••••••••").fill("Motto1786")
    page.get_by_role("button", name="Giriş Yap").click()

    # Wait for Dashboard
    # "TOPLAM NET VARLIK" is a good indicator of Dashboard
    expect(page.get_by_text("TOPLAM NET VARLIK")).to_be_visible(timeout=10000)

    # Take screenshot
    page.screenshot(path="dashboard_verification.png")

    browser.close()

with sync_playwright() as playwright:
    run(playwright)
