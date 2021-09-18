"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[155],{1554:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return s},metadata:function(){return l},assets:function(){return u},toc:function(){return d},default:function(){return h}});var o=n(7462),i=n(3366),a=(n(7294),n(3905)),r={title:"A Glimpse into Front End Interviews",slug:"a-glimpse-into-front-end-interviews",author:"Kai Li",author_title:"Software Engineer at Quora",author_url:"https://github.com/li-kai",author_image_url:"https://github.com/li-kai.png",tags:["front end","interview"],hide_table_of_contents:!0},s=void 0,l={permalink:"/blog/a-glimpse-into-front-end-interviews",source:"@site/blog/2021-08-30-a-glimpse-into-front-end-interviews.md",title:"A Glimpse into Front End Interviews",description:"A glimpse into the front end interview process and questions that frequently come up.",date:"2021-08-30T00:00:00.000Z",formattedDate:"August 30, 2021",tags:[{label:"front end",permalink:"/blog/tags/front-end"},{label:"interview",permalink:"/blog/tags/interview"}],readingTime:4.99,truncated:!0,authors:[{name:"Kai Li",title:"Software Engineer at Quora",url:"https://github.com/li-kai",imageURL:"https://github.com/li-kai.png"}],nextItem:{title:"Front End Career Questions",permalink:"/blog/front-end-career-questions"}},u={authorsImageUrls:[void 0]},d=[{value:"Interview Process",id:"interview-process",children:[]},{value:"JavaScript Rounds",id:"javascript-rounds",children:[{value:"JavaScript Minutiae",id:"javascript-minutiae",children:[]},{value:"JavaScript Topics",id:"javascript-topics",children:[]}]},{value:"Discussion Rounds",id:"discussion-rounds",children:[{value:"Web development tools",id:"web-development-tools",children:[]},{value:"React or web framework of choice",id:"react-or-web-framework-of-choice",children:[]},{value:"Work experience",id:"work-experience",children:[]}]},{value:"Implementation Rounds",id:"implementation-rounds",children:[]},{value:"Algorithm Rounds",id:"algorithm-rounds",children:[]},{value:"Conclusion",id:"conclusion",children:[]}],c={toc:d};function h(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("link",{rel:"canonical",href:"https://lik.ai/blog/my-experience-with-front-end-interviews"})),(0,a.kt)("p",null,"A glimpse into the front end interview process and questions that frequently come up."),(0,a.kt)("h2",{id:"interview-process"},"Interview Process"),(0,a.kt)("p",null,"Applying for front end engineer roles is very similar to software engineer roles, but the interviews can be quite different. In my experience, for each company, there tend to be between 3 to 4 sessions. Most of them will be testing on JavaScript and discussion around web development technologies, and the rest on algorithms or behavioral."),(0,a.kt)("p",null,"One aspect that I have found interesting is that the younger the company, the more questions will lean towards JavaScript. This could be because hiring specifically for front end engineers is relatively new. Older companies used to only hire software engineers without regard if their focus is on the back end or front end."),(0,a.kt)("h2",{id:"javascript-rounds"},"JavaScript Rounds"),(0,a.kt)("p",null,"JavaScript is the main focus among all the companies I have interviewed with. It makes sense as front end work nowadays is very JavaScript-heavy. HTML and CSS knowledge is no longer a necessity thanks to component libraries and the likes."),(0,a.kt)("h3",{id:"javascript-minutiae"},"JavaScript Minutiae"),(0,a.kt)("p",null,"To qualify for some companies, you might need to brush up on the minutiae of JavaScript. Topics like variable hoisting, holey arrays, non-strict mode, and switch case fall through came up. While I do not feel that knowing such things determine who is a better engineer, it is what it is. Here is my ",(0,a.kt)("a",{parentName:"p",href:"https://repl.it/@li_kai/JavaScript-Cheatsheet"},"JavaScript cheat sheet"),"."),(0,a.kt)("h3",{id:"javascript-topics"},"JavaScript Topics"),(0,a.kt)("p",null,"After the first assessment, live interviews tend to test on more advanced JavaScript concepts such as the event loop, promises, async/await, scope and closures."),(0,a.kt)("p",null,"If you have been writing JavaScript applications for some time and have come across a variety of situations, this should not be too hard."),(0,a.kt)("p",null,"The most frequently asked question I have ever gotten is to implement ",(0,a.kt)("inlineCode",{parentName:"p"},"debounce")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"throttle"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"function debounce(fn, duration) {\n  let id;\n  return function (...args) {\n    if (id) {\n      // reset timeout and prevent it from triggering\n      // if debounced function is called within duration\n      clearTimeout(id);\n    }\n    id = setTimeout(() => {\n      fn(...args);\n    }, duration);\n  };\n}\n\nfunction throttle(fn, duration) {\n  let id;\n  return function (...args) {\n    if (id) {\n      // if throttled function is called within duration,\n      // do nothing\n      return;\n    }\n\n    fn(...args);\n\n    id = setTimeout(() => {\n      id = null; // release \"lock\"\n    }, duration);\n  };\n}\n\n// usage example\nconst helloWorld = () => {\n  console.log('hello world');\n};\nconst debouncedHelloWorld = debounce(helloWorld, 1000);\nconst throttledHelloWorld = throttle(helloWorld, 1000);\n")),(0,a.kt)("p",null,"The second most frequently asked question is to implement a sequential ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise.all")," of sorts:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function sequential(data, fetcher) {\n  const helper = (index, results) => {\n    if (index === data.length) {\n      return results;\n    }\n    return fetcher(data[index]).then((datum) => {\n      results.push(datum);\n      return helper(index + 1, results);\n    });\n  };\n\n  return helper(0, []);\n}\n\n// usage example\nconst fetcher = (i) => {\n  return new Promise((resolve) => {\n    setTimeout(() => resolve(i), 1000);\n  });\n};\nsequential([1, 2, 3], fetcher);\n")),(0,a.kt)("h2",{id:"discussion-rounds"},"Discussion Rounds"),(0,a.kt)("h3",{id:"web-development-tools"},"Web development tools"),(0,a.kt)("p",null,"Regardless of how we wish to deny it, web development tools are an increasingly complex and diverse ecosystem."),(0,a.kt)("p",null,"Smaller companies, especially start-ups, require engineers who have a good understanding of these tools. Larger companies will be able to abstract tooling complexity away from engineers unless the role demands it."),(0,a.kt)("p",null,"As such, web development tools like Webpack and Babel have become a common discussion topic."),(0,a.kt)("p",null,"A good understanding of tools like Webpack would be to be able to explain the following concepts:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"what is bundling"),(0,a.kt)("li",{parentName:"ul"},"what is tree-shaking"),(0,a.kt)("li",{parentName:"ul"},"what is lazy-loading and why does it matter"),(0,a.kt)("li",{parentName:"ul"},"how loaders work")),(0,a.kt)("h3",{id:"react-or-web-framework-of-choice"},"React or web framework of choice"),(0,a.kt)("p",null,"If the role states that React knowledge is required, you may be expected to answer or code out React components. If you do not have React experience, using other frameworks would be possible, provided that you can explain well what is happening."),(0,a.kt)("p",null,"This may range from implementing a feature live or simply answering or explaining some React concepts such as ",(0,a.kt)("inlineCode",{parentName:"p"},"useEffect"),"'s dependencies array or ",(0,a.kt)("inlineCode",{parentName:"p"},"shouldComponentUpdate"),"."),(0,a.kt)("h3",{id:"work-experience"},"Work experience"),(0,a.kt)("p",null,"Aside from the two topics mentioned earlier, interviewers might dive into one or two things that they found interesting in your resume and ask you to elaborate."),(0,a.kt)("p",null,"As I had some experience in writing Babel plugins and jscodeshift code mods, I walked them through how I utilized those tools to help make the company codebase better."),(0,a.kt)("h2",{id:"implementation-rounds"},"Implementation Rounds"),(0,a.kt)("p",null,"In all of my interviews, I have only been asked to implement a feature twice. It is not a common question, but it may come up."),(0,a.kt)("p",null,"This would come down to how well-versed you are with your basics such as HTML and CSS, as well as tools and frameworks. As an example, one of the question I have gotten was to implement an autocomplete search bar like Google's. If you have built something like that before, it is doable within an hour."),(0,a.kt)("p",null,"Implementation rounds feel very similar to algorithms, as you need to actively find the best solution while thinking out loud and explaining your decisions."),(0,a.kt)("h2",{id:"algorithm-rounds"},"Algorithm Rounds"),(0,a.kt)("p",null,"As software engineers, we are not unfamiliar with algorithm questions. Leetcode and Hackerrank are common resources used for practicing such questions."),(0,a.kt)("p",null,"As I knew this was my weakness, this was where I spent the most time. It may be a little ironic that I chose Python over JavaScript as my language of choice for tackling algorithms. JavaScript's lack of a native minheap and binary search implementation made it a slightly worse choice."),(0,a.kt)("p",null,"For those who are just starting to learn Python or getting back into it, here's my ",(0,a.kt)("a",{parentName:"p",href:"https://repl.it/@li_kai/Python-Cheatsheet"},"Python cheat sheet"),"."),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"Front end software engineer roles are not very different from general software engineer roles, but they do tend to be more specialized and in some ways, require even more effort."),(0,a.kt)("p",null,"If you are passionate about this field and interested in what you do, this would not be too high of a hurdle. I hope my experience and tips were useful to you, and good luck in your search!"))}h.isMDXComponent=!0}}]);