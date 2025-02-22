using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Net_OOPS_Assignment_03
{
    class Book
    {
        public int BookID;
        public string Title;
        public string Author;
        public bool IsAvailable;
        public Book(int BookID, string Title, string Author)
        {
            this.BookID = BookID;
            this.Title = Title;
            this.Author = Author;
            this.IsAvailable = true;
        }
        public void DisplayBookDetails()
        {
            Console.WriteLine("Book ID: " + BookID);
            Console.WriteLine("Title: " + Title);
            Console.WriteLine("Author: " + Author);
            Console.WriteLine("Is Available: " + IsAvailable);

        }
    }
    class User
    {
        public int UserID;
        public string Name;
        public int BorrowedBookID;
        public User(int UserID, string Name)
        {
            this.UserID = UserID;
            this.Name = Name;
            this.BorrowedBookID = 1;
        }
        public void DisplayUserDetails()
        {
            Console.WriteLine("User ID: " + UserID);
            Console.WriteLine("Name: " + Name);
            Console.WriteLine("Borrowed Book ID: " + BorrowedBookID);
        }

    }
    class Library
    {
        public List<Book> Books = new List<Book>();
        public List<User> Users = new List<User>();
        public void AddBook(Book book)
        {
            Books.Add(book);
            Console.WriteLine($"{Books.}");
        }

    }
    class Program
    {
        static void Main(string[] args)
        {
        }
    }
}
