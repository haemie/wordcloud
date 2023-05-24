# ☁️ Word Cloud Chrome Extention ☁️

Ever go to a website with walls and walls of text and feel overwhelmed? Ever wish you could press a button to see the most important parts of a page? Orignal hackathon project here: https://github.com/haemie/CSHackathon

## To install:

1. Download files
2. Use Google Chrome
3. Navigate to chrome://extensions/
4. Enable "Developer Mode"
5. Click "Load unpacked" and select the folder with the downloaded files
6. Turn on extension

## Key Takeaways:

- use manifest to execute background.js, look into <a href ="https://developer.chrome.com/docs/extensions/reference/scripting/">scripting</a> compared to <a href="https://developer.chrome.com/docs/extensions/mv3/content_scripts/">content_scripts</a> <br>
- execute main js script by calling through background.js, targeting current tab <br>
- <a href="https://stackoverflow.com/questions/21314897/access-dom-elements-through-chrome-extension"> reference </a>


## Todo:

- limit word cloud to top 50 most used words, adding new words when old words are removed
- keep all the content on a page without scrolling
- fix issue on pages with small body element that causes text to overlap

## Todo mayhaps:

- wrap bubble into shape <a href="https://css-tricks.com/using-css-to-set-text-inside-a-circle/">refrence1</a> and <a href="https://devdojo.com/temani-afif/wrapping-text-inside-a-circular-shape"> reference2 </a>
- improve transitions maybe more bouncy
- maybe bar graph/pie chart

## Todo probably not

- fill in white space
- rotate some text
