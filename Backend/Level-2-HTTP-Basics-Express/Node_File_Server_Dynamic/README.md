### **Instructions**

## **Node.js Dynamic File Server**

## **Overview:**

This project involves creating a dynamic file server using Node.js that not only serves static files but also dynamically generates listings for directories and files with a user-friendly UI, including icons. The goal is to deepen your understanding of web servers, handling HTTP requests, and dynamically serving content based on user navigation.

## **Detailed Explanation:**

### **Topics Covered:**

- HTTP Protocol
- Node.js **`http`** and **`path`** Modules
- Dynamic Content Generation
- File System Operations

### **Problem Statement:**

Your task is to develop a dynamic file server that:

- Provides a directory listing on the root URL (**`/`**), displaying all files and folders with appropriate icons (folders: , files: ).
- Enables navigation into nested directories through URL paths, dynamically generating listings for each directory visited.
- Serves actual file contents when a file is accessed directly.
- Returns a "404 Not Found" error for requests to non-existent directories or files.
- Utilizes the Node.js **`path`** module to correctly navigate filesystem paths based on URL routes.

Hints:

- For the UI, manipulate **`<li>`** tags to include the Unicode HTML-code for folders and files, enhancing the visual presentation.
- Dynamically generate HTML to display directory contents with proper icons and anchor tags for navigation.

### **Examples:**

- Accessing **`/`** displays a list of all directories and files in the root, with icons indicating type (directory or file):

!https://i.imgur.com/8Msqzs7.png

- Accessing **`/__tests__`** shows the contents of the **`__tests__`** directory with appropriate icons:

!https://i.imgur.com/l2s6vlu.png

- Navigating to **`/__tests__/other`** dynamically generates a listing for the **`other`** directory inside **`__tests__`**:

!https://i.imgur.com/LZki7ht.png

## **Submission Guidelines:**

- Ensure your solution is fully functional and meets all the requirements before submission.
- Your code should be clean, well-commented, and follow best practices for readability and maintainability.
- Test your application to ensure it handles various scenarios and edge cases efficiently.

# **Solution:**

The expected solution will showcase an advanced understanding of Node.js for building a dynamic file server that can:

- Initialize a server using the **`http`** module.
- Use the **`fs`** and **`path`** modules for reading directories and files, and for navigating the file system.
- Dynamically create HTML content for directory listings, incorporating Unicode icons for a user-friendly interface.
- Correctly handle routing for nested directories and file serving.
- Implement error handling for non-existent paths, serving a "404 Not Found" page.
- Include detailed comments explaining the functionality and logic behind the implementation.

This project will allow students to demonstrate their proficiency in Node.js, particularly in using its core modules to serve files and directories dynamically, enhancing user experience with a polished UI for navigation.