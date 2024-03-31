export const Questions=[
    {
        prompt:'What is the correct command to create a new React project ?',
        optionA:'npm create-react-app myReactApp',
        optionB:'npx create-react-app ',
        optionC:'npx create-react-app myReactApp',
        optionD:'npm create-react-app ',
        answer:'optionC' 
    },
    {
        prompt:`What does myReactApp refer to in the 'npx create-react-app myReactApp' command ?`,
        optionA:'the name you want to use for the new app',
        optionB:'the type of app to create',
        optionC:'a reference to an existing app',
        optionD:'the directory to create the new app in',
        answer:'optionA' 
    },{
        prompt:'What command is used to start the React local development server ?',
        optionA:'npm serve',
        optionB:'npm start',
        optionC:'npm run dev',
        optionD:'npm build',
        answer:'optionB' 
    }
    ,{
        prompt:'What is the default local host port that a React development server uses ?',
        optionA:'5000',
        optionB:'3500',
        optionC:'8080',
        optionD:'3000',
        answer:'optionD' 
    }
    ,{
        prompt:'What is the children prop ?',
        optionA:'a property that lets you nest components in other components',
        optionB:'a property that adds child values to state',
        optionC:'a property that lets you pass data to child components',
        optionD:'a property that you set an object as property',
        answer:'optionA' 
    }
    ,{
        prompt:'Which keyword creates a constant in JavaScript ?',
        optionA:'var',
        optionB:'constant',
        optionC:'let',
        optionD:'const',
        answer:'optionD' 
    }
    ,{
        prompt:`A copy of the 'real' DOM that is kept in memory is called what ?`,
        optionA:'Shadow DOM',
        optionB:'React DOM',
        optionC:'Virtual DOM',
        optionD:'DOM',
        answer:'optionC' 
    }
    ,{
        prompt:'Which operator can be used to conditionally render a React component ?',
        optionA:'::',
        optionB:'??',
        optionC:'||',
        optionD:'&&',
        answer:'optionD' 
    }
    ,{
        prompt:'When rendering a list using the JavaScript map() method, what is required for each element rendered ?',
        optionA:'index',
        optionB:'key',
        optionC:'data',
        optionD:'id',
        answer:'optionB' 
    }
    ,{
        prompt:'What tool does React use to compile JSX ?',
        optionA:'React Router',
        optionB:'ReactDOM',
        optionC:'JSX Compiler',
        optionD:'Babel',
        answer:'optionD' 
    }
    ,{
        prompt:'How can you optimize performance for a function component that always renders the same way ?',
        optionA:'Wrap it in the React.memo higher-order component',
        optionB:'Use the shouldComponentUpdate lifecycle method',
        optionC:'Use the useReducer Hook',
        optionD:'Use the useMemo Hook',
        answer:'optionA' 
    }
    ,{
        prompt:'What props will be available to the following component <Car {...props} /> ?',
        optionA:'only static ones',
        optionB:'all of them',
        optionC:'only updated ones',
        optionD:'children',
        answer:'optionB' 
    }
    ,{
        prompt:'What is a common use case for ref ?',
        optionA:'To directly access a DOM node ',
        optionB:'To refer to a function',
        optionC:'To refer to another JavaScript file',
        optionD:'To bind the function',
        answer:'optionA' 
    }
    ,{
        prompt:'What is the correct syntax to import a Component from React ?',
        optionA:`import [Component] from 'react'`,
        optionB:`import Component from 'react'`,
        optionC:`import React.Component from 'react'`,
        optionD:`import {Component} from 'react'`,
        answer:'optionD' 
    }
    ,{
        prompt:'React separates the user interface into components. How are components combinded to create a user interface ?',
        optionA:'With code splitting',
        optionB:'By putting them in a folder structure',
        optionC:'By nesting components',
        optionD:'With webpack',
        answer:'optionC' 
    }
    ,{
        prompt:'Which of the following is NOT a rule for React Hooks ?',
        optionA:'Hooks can only be called in Class or function components',
        optionB:'Hooks can only be called inside React function components',
        optionC:'Hooks cannot be conditional',
        optionD:'Hooks can only be called at the top level of the component',
        answer:'optionA' 
    }
    ,{
        prompt:`Why should you avoid copying the values of props into a component's state?`,
        optionA:'Because you should never mutate state',
        optionB:'Because that would create two instances of the same state that could become out of sync',
        optionC:'Because you want to allow data to flow back to the parent',
        optionD:'Because prop values cannot be stored in state',
        answer:'optionB' 
    }
]