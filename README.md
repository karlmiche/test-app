# PokeApi Test App
(I wasn't able to implement search functionality, favoriting/removing favorites, or improve the UI - I did not end up meeting the requirements for this app and am just leaving a note about this to talk through what I was able to do! Since I didn't meet the requirements by displaying a form, I left the main view on an un-paginated list of all Pokemon sent back from the api.)


## Creation Process
### Learning Redux Toolkit and RTK Query
Most of my time with this take-home was spent reading through the Redux Toolkit docs, which might have been an error since I haven't used this technology before. I might have been able to get further along if I had used technologies and strategies I felt familiar with versus trying to learn a new framework.

However, it was useful to learn Redux basics and think about how to write reducers/how that might be advantageous for application state in future applications. 

### Unknowns/Sticking Points
* Caching resources locally
 * I read in the Redux toolkit docs that RTK Query has a built-in capacity to cache resources from an API so the next request comes from a cache and not from a new request. I tried to verify if this was happening in the `Network` tab in developer tools but don't feel sure about whether or not secondary requests were coming from cached sources. It looked more like a new request was being made every time. 

* Using forms in React without a library
 * I think not using a library or integration with a form solution was a silly choice. I ended up spending too much of my time seeking resources on how to marry up RTK Queries and search params in a native form element. I think something like `react-hook-forms` or `Formik` might have saved me some time. With more time I would have continued to think about how queries in RTK Query would work in form submission. 

* Not building out known UI components
  * If I redid this project, I would have also prioritized just chunking out the UI components regardless of styling. I worked with the PokeApi during the boot camp I attended and think it would have been good to demonstrate I knew what data I was looking for, and where. 

## App Setup 
Run `npm install` and `npm start` to get started with this application!