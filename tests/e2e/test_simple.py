from playwright.sync_api import sync_playwright

def test_simple():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.goto("http://localhost:3000/")
        assert page.title() == "Learning Journey"
        browser.close()
