---
title: Update on the Anatomy of This Website
date: "2016-07-24T05:53:10.814Z"
layout: post
path: "/update-on-the-anatomy-of-this-website/"
---

My website used to run through a [very fragile and patchwork blog engine](https://github.com/OpenSourceMe/Website) that I wrote in Javascript, which rendered a React application from a simple server. This server pulled Markdown and JSON files from a GitHub repo and injected them into a React application. I wanted this setup so that I could content manage my blog through GitHub, and render it as a React applicationx.

I recently came across [Gatsby](https://github.com/gatsbyjs/gatsby), a much better implementation of my old website engine's concept. This site is now a static site that is generated using Gatsby. That is to say, the site is HTML, CSS and Javascript pages that are generated from Markdown and other file types by a process that runs on my computer when I am developing. The site is hosted on GitHub pages, which means that when I want to make changes, I still just push to a GitHub repo.

This is a much cleaner and more flexible setup! Thank the higher power for Gatsby.