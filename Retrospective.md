# Retrospective

- name: Mevludin Causevic
- email: mevludincausevic@u.boisestate.edu

## Experience

I had a lot of really small issues that cascaded into really big issues. I think being new to pug made things hard initially but it was pretty simple to get the hang of later, its just syntax. My main sticking point was randomly my server could no longer parse req.body.todo. I could not figure out what in the world was happening but it crashed my server everytime because it tried inserting a null value into the todo column. After some research I fell back to the trusty app.use(express.json) as I saw that wasn't initially included. I then formatted the data and added the content-type header and it started posting successfully to the database. I wish I knew what caused it to stop working in the first place. Another issue I ran into was trying to access the value of the input form "Delete". The reason I did this was because I added a listener on the entire document for any button and depending on if it were of value Delete or not I would use different methods to make requests to the server. This way even if the page is dynamically rendered it would always work. I tried all the usuals like event.target.value but it was always null causing the delete button to just add more empty entries. Turns out you can use this cool submitter property which will give you the value of the input of the form that submitted the request. After figuring this out I was able to successfully delete things and add things to the page and it works as required. I did make the website as ugly as I could think of for the extra credit but I will properly fix this later at some point just incase someone else looks at it.

## Known issues or Bugs

The page will automatically reload to refresh the get request and load the new items that were added or deleted. normally I would chain a get request to the post request but I couldn't figure out how to without breaking everything. It would probably be beneficial to add the list item locally after posting it to the server to avoid unneccessary requests but for something this small I don't think it really matters. Also the inputs are not sanitized at all so do not use the server side code in anything that matters.

## Sources used

https://developer.mozilla.org/en-US/docs/Web/API/SubmitEvent/submitter
https://css-tricks.com/almanac/properties/a/animation/
