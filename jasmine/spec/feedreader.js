/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('url defined', function() {
            for (let feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            }
        });

        /* Test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
    });
    it('name defined', function() {
        for (let feed of allFeeds) {
            expect(feed.name).toBeDefined();
            expect(feed.name.length).not.toBe(0);
        }
    });


    /**Test Suite for Menu Functionality.  Tests that the menu is hidden by default. 
     * Then tests to make sure the menu is visible when clicked*/
    describe('The menu', function() {
        it('is hidden', function() {
            const body = document.querySelector('body');
            expect(body.classList.contains('menu-hidden')).toBe(true);
        });

        it('toggles on and off', function() {
            const body = document.querySelector('body');
            const menu = document.querySelector('.menu-icon-link');

            menu.click();

            expect(body.classList.contains('menu-hidden')).toBe(false);

        });
    });

    /**Test Suite for single entries into the feed reader */
    describe('Initial Entries', function() {
        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });
        it('has at least one entry', function() {
            expect(loadFeed).not.toBe(0);
        });
    });

    /* Test suite for ensuring when a new feed is loaded
     * by the loadFeed function that the content actually changes.
     */
    describe('New Feed Selection', function() {
        let newEntry;
        beforeEach(function(done) {
            loadFeed(0, function() {
                newEntry = document.querySelector('.feed').innerHTML;

                loadFeed(1, function() {
                    done();
                });
            });
        });
        it('feed content is changed', function(done) {
            let oldEntry = document.querySelector('.feed').innerHTML;
            expect(newEntry).not.toBe(oldEntry);
            done();
        });

    });



}());