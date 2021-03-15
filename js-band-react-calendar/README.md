
# js-band-react-hw-6

The Calendar application allows you to view the daily schedule for a week for multiple participants. The application has the ability to create an event indicating the time, day of the week and participants, as well as delete events and filter by participants.

**Homework task 6**

Improvements*
The application has been partially moved to React: the static "Table" component, the page for authorizing and creating a new event.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br /> Open
[http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br /> You will also see any lint errors
in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br /> It correctly bundles
React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br /> Your app is
ready to be deployed!

See the section about
[deployment](https://facebook.github.io/create-react-app/docs/deployment) for
more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can
`eject` at any time. This command will remove the single build dependency from
your project.

Instead, it will copy all the configuration files and the transitive
dependencies (Webpack, Babel, ESLint, etc) right into your project so you have
full control over them. All of the commands except `eject` will still work, but
they will point to the copied scripts so you can tweak them. At this point
you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for
small and middle deployments, and you shouldn’t feel obligated to use this
feature. However we understand that this tool wouldn’t be useful if you couldn’t
customize it when you are ready for it.

## Project Structure

```
js-band-react-calendar
├─ .eslintrc
├─ README.md
└─ src
   ├─ actions
   │  └─ actions.js
   ├─ assets
   │  └─ icons
   │     └─ calendar.svg
   ├─ components
   │  ├─ App
   │  │  ├─ App.jsx
   │  │  └─ index.js
   │  ├─ Buttons
   │  │  ├─ BlackButton.jsx
   │  │  ├─ index.js
   │  │  └─ OrangeButton.jsx
   │  ├─ Event
   │  │  └─ Events.jsx
   │  ├─ Footer
   │  │  ├─ Footer.jsx
   │  │  └─ index.js
   │  ├─ Form
   │  │  ├─ DayOfWeekSelect.jsx
   │  │  ├─ Form.jsx
   │  │  ├─ index.js
   │  │  └─ TimeSelect.jsx
   │  ├─ Header
   │  │  └─ Header.jsx
   │  ├─ Modal
   │  │  ├─ index.js
   │  │  └─ Modal.jsx
   │  ├─ SignInForm
   │  │  ├─ index.js
   │  │  └─ SignInForm.jsx
   │  └─ Table
   │     ├─ index.js
   │     ├─ Table.jsx
   │     ├─ TableCell.jsx
   │     ├─ TBody.jsx
   │     └─ Thead.jsx
   ├─ constants
   │  ├─ actionTypes.js
   │  └─ collectionTypes.js
   ├─ context
   │  └─ global.js
   ├─ hooks
   │  └─ useModal.js
   ├─ index.js
   ├─ pages
   │  ├─ CalendarPage.jsx
   │  ├─ CreateNewEvent.jsx
   │  ├─ NotFoundPage.jsx
   │  └─ SingInPage.jsx
   ├─ reducers
   │  └─ global.js
   ├─ services
   │  └─ ServiceAPI.js
   ├─ styles
   │  ├─ base
   │  │  └─ _normalize.scss
   │  ├─ components
   │  │  ├─ buttons
   │  │  │  └─ _buttons.scss
   │  │  ├─ footer
   │  │  │  └─ _footer.scss
   │  │  ├─ form
   │  │  │  └─ _form.scss
   │  │  ├─ header
   │  │  │  └─ _header.scss
   │  │  ├─ item
   │  │  │  └─ _item.scss
   │  │  ├─ main-content
   │  │  │  └─ _main-content.scss
   │  │  ├─ modal
   │  │  │  └─ _modal.scss
   │  │  ├─ pages
   │  │  │  └─ _page-not-found.scss
   │  │  └─ table
   │  │     └─ _table.scss
   │  ├─ main.css
   │  ├─ main.css.map
   │  ├─ main.scss
   │  └─ _common.scss
   └─ users.json

```