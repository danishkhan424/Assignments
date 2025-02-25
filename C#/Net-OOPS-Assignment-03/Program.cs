using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Net_OOPS_Assignment_03
{
    class Book
    {
        public int BookID { get; set; }
        public string Title { get; set; }
        public string Author { get; set; }
        public bool IsAvailable { get; set; } = true;

        public Book(int bookID, string title, string author)
        {
            BookID = bookID;
            Title = title;
            Author = author;
        }
        public void DisplayBookDetails()
        {
            Console.WriteLine($"Book ID: {BookID}, Title: {Title}, Author: {Author}");

        }
        public void DisplayBookDetails(bool isAvailable)
        {
            Console.WriteLine($"Book ID: {BookID}, Title: {Title}, Author: {Author}, Is Available: {IsAvailable}");
        }
    }
    class User
    {
        public int UserID { get; set; }
        public string Name { get; set; }
        public int BorrowedBookID { get; set; } = -1;

        public User(int userID, string name)
        {
            UserID = userID;
            Name = name;
        }
        public virtual void DisplayUserDetails()
        {
            Console.WriteLine($"User ID: {UserID} Name: {Name}) Borrowed Book ID: {BorrowedBookID}");
        }

    }
    class PremiumUser : User
    {
        public string MembershipLevel { get; set; }

        public PremiumUser(int userID, string name, string membershipLevel) : base(userID, name)
        {
            MembershipLevel = membershipLevel;
        }

        public override void DisplayUserDetails()
        {
            Console.WriteLine($"User ID: {UserID}, Name: {Name}, Membership: {MembershipLevel}, Borrowed Book ID: {BorrowedBookID}");
        }
    }
    class Library
    {
        public List<Book> Books { get; set; } = new List<Book>();
        public List<User> Users { get; set; } = new List<User>();
        public void AddBook(Book book)
        {
            Books.Add(book);
            Console.WriteLine($"{book.Title} added to the library");
        }
        public void AddUser(User user)
        {
            Users.Add(user);
            Console.WriteLine($"User '{user.Name}' registered.");
        }

        public void BorrowBook(int userID, int bookID)
        {
            User user = Users.Find(u => u.UserID == userID);
            Book book = Books.Find(b => b.BookID == bookID);

            if (user == null)
            {
                Console.WriteLine("User not found.");
                return;
            }
            if (book == null)
            {
                Console.WriteLine("Book not found.");
                return;
            }
            if (!book.IsAvailable)
            {
                Console.WriteLine("Book is already borrowed.");
                return;
            }

            book.IsAvailable = false;
            user.BorrowedBookID = bookID;
            Console.WriteLine($"User '{user.Name}' has borrowed '{book.Title}'book.");
        }

        public void ReturnBook(int userID)
        {
            User user = Users.Find(u => u.UserID == userID);
            Book book = Books.Find(b => b.BookID == user.BorrowedBookID);

            if (user == null || user.BorrowedBookID == -1)
            {
                Console.WriteLine("No borrowed book found for this user.");
                return;
            }


            if (book != null)
            {
                book.IsAvailable = true;
                user.BorrowedBookID -= 1;
                Console.WriteLine($"User '{user.Name}' returned '{book.Title}' book.");
            }
        }
    }
    class Program
    {
        static void Main()
        {
            Library library = new Library();
            Book book1 = new Book(101, "Rich Dad Poor Dad", "Wilson Richard");
            Book book2 = new Book(102, "Monster", "Lucy");

            User user1 = new User(1, "Danish");
            PremiumUser user2 = new PremiumUser(2, "Ali", "Gold");

            library.AddBook(book1);
            library.AddBook(book2);
            library.AddUser(user1);
            library.AddUser(user2);
            library.BorrowBook(1, 101);
            library.BorrowBook(2, 102);
            book1.DisplayBookDetails();
            book2.DisplayBookDetails();
            user1.DisplayUserDetails();
            user2.DisplayUserDetails();
            library.ReturnBook(2);
            library.BorrowBook(2, 101);
            
            Console.ReadLine();
        }
    }
}
