# All in One

<!-- Naviagations for this app -->
<!-- Zain's Desk with logo -->
<!-- Home -->
<!-- Exam preparation (working on this module) -->
<!-- Quick Links -->
<!-- Password Vault -->
<!-- Task / todos -->
<!-- Settings -->
<!-- Logout -->

 <!-- Selected options background color #FEFEFE -->
 <!-- text color #122300 and not selected text color #F0F0F0 -->
 <!-- Sidebar container background color #1C1C1E -->
 <!-- border of the container #2C2C2C -->

 <!--  -->

 <!-- Features to be added on the single chapter preview page -->

Make the bookmark as saved and important as a separate thing in all the exam sections

 <!-- 1. Bookmark (option for both the chapter and the image to be bookmarked). -->
 <!-- 2. Mark as done (option for both the image and the chapter to be marked as bookmark (Important)). -->
 <!-- 3. Option to show the Bookmark images first and then the others and also marks as done option and when user selects this then it shows the done images first then the other images (Bookmark means important) -->

4.  Option to share the chapter.
    <!-- 5. Option to delete a specific image of the chapter. -->
    <!-- 6. On the image the user must have the full screen option, Zoom image option and save to local device option. -->
5.  Show the exact details of the images in the text format.

 <!-- Tasks for today must done -->
 <!-- 1. Add the popups like  -->
 <!-- -> ARE YOU SURE TO DELETE THE CHAPTER? || Image  -->

<!--
  Think about the edit section what to show on this?
 Options for now
 1. Edit the name of the chapter.
 2. Add a picture for the chapter.
 3. Save buttonn and cancel button. -->

<!-- Challenges on the frontend side of the Exam-preparation module (for now) -->

<!-- 1. What to show on the add new book?
2. Where to show the edit delete etc functionalities of the books?
3. What to show on the add new chapter?
4. What if the user wants to add images to the existing chapter?
5. Status like Important, and Status like completed pending are updated where on the chapters. -->
<!--
Answer 1 :
-> Add Name of the Subject/ Book.
-> Add Image for the Book.
-> Select Type (Mids , Finals).
-> Have options to set as normal, important, medium etc.
-> Have options to mark as pending, Remaining, Completed.
That's it for now I think. -->
<!--
Answer 2 :
-> Options of edit,delete on the card like three dots on the left side and when user hovers/clicks it will show edit and delete options.
-> Delete will show a confirmation message.
-> Edit will show a form with already created details like Image,Name,Type (mids,finals) and he can edit this and save. -->
<!--
Answer 3 :
-> Name of the chapter.
-> Image optional if he wants he can add or show the default card for the chapter.
-> Upload multiple images through drag and drop (for now only images).
-> Save the chapter (that's it for now). -->

<!-- Answer 4 :
-> Name of the chapter will be shown (not edit-able) and he is shown a drap and drop input option or like that to add more photos and save. -->

<!-- Answer 5 :
-> On the edit section of the Book the user will be able to update the status of the Books. -->

<!-- For now complete the options of the frontend side of the Learning section -->
<!-- 1. What to show on the Add new Chapter?
2. What to show on the Add Notes to existing chapter.


Ans 1.
1. Name of the chapter.
2. Image for the chapter (optional).
3. Upload (drag and drop option for the user to upload multiple images 10,30 50 etc what so ever).
4. Save the chaper option. -->

For the time tracker, todo and calender feature both will be the part of the todo section with three options to show different parts of it.

1. I will create only one single todo and it's data will be used on both the tabs of calender and the progress tracker (total time worked) section.
2. On the progress tracker user have to select the todo he is working on and then he will start the timer for it.He can also have other options but for now it's not the part.

<!-- Design the todo page first and look for the navbar that is going to be shown on the Todos Page -->

1. Create todo option.
2. Total Todo's for today.
3. Remaining todo's for today with percentage.

In the bottom two containers ->

1. One container to show the today todos.
2. 2nd one to show the todo's before today.

show in the form of cards and use categories to create todo and on the todo card show different saved images on the cards based on categories.
option to show the priority of the todo.(Important,Normal etc).

<!-- what to show on the options of the bar chart and the pie chart -->

<!-- 1. pie chart to show the comparison of the total todos and the remaining todo's.
2. Bar chart to show the name of the category with completed and remaining comparison. -->

<!-- Todos will have the following things -->

<!-- 1. Text
2. Priority (High,medium,low etc).
3. Backend will asign number to each todo by #120 or for the first it would be #1.
4. If created today then it will show today with icon (as per UI requirement).
5. It will show the category also with icon.
6. Status of the todo (Pending,Completed,In Progress).
7. start time, end time. (for calender and time tracker).
8. created on (update on).
9. In progress will be shown with different container stylings.
10. Option to edit and delete the todo. -->

<!-- UI based thinking -->

<!-- 1. first layer to show the id number,text, priority with three dots to show the options.
2. status,Created today with icon, icon+category, start and end time, created at. -->

<!-- old todo card -->

on the old todo card just show category, text, created on (date) and on the right top show an arrow to open full preview of the old todo

<!-- Calender section UI Consideration. -->

First component ->

=> DateCarousel || TimelineDateSelector

1. Top: Date Navigation (Horizontal Selector) eg. ← 11 12 13 Today 15 16 17 →
   -> Active date is highlighted (e.g., Today).
   -> Arrows scroll the date window
   -> Can be scrollable or paginated
   -> Clicking a date updates the task timeline below

Second Component ->

=> CalenderTodos.jsx

1. left starting block for the time (9am to 10am) and so on... in vertical way (next will be 10 to 11am) etc...
2. each will have the corresponding blocks with fixed height and width (exactly equals to the card) that block will show the single todo and I will map here all the todo's of that specific time.

Workflow may work better in this way =>

1. I will filter and create a new array for the data that will be the have the 24 hours or 12 hours data in the form division like the first one will have the data from the specific time to specific time and so on. (helpfull If I want to map and show on the corresponding containers).

2. In the UI the first row in which the first left most box will show the time that maybe 9am to 10am or whenever it's starting.
3. And so on the rows will have the next hour with corresponding rows.
4. When user clicks on the specific card a fixed or container will be shown on the right atmost side with all the details of the todo.

And the user can also move the container (may use a package for it).
