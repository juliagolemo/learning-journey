import os
from playwright.sync_api import sync_playwright

def test_simple():
    base_url = os.getenv('TEST_APP_BASE_URL', 'http://localhost:3000/')
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.goto(base_url)
        assert page.title() == "Learning Journey"
        browser.close()
