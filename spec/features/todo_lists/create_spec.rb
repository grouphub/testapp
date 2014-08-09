require 'spec_helper'

describe "Creating To Do Lists" do 
	it "redirects to the to do list index page on success" do
		visit "/todo_lists"	
		click_link "New Todo list"
		expect(page).to have_content("New todo_list")

		fill_in "Title", with: "My Test List"
		fill_in "Description", with: "This is my first example"
		click_button "Create Todo list"

		expect(page).to have_content("My Test List")
	end
	it "displays an error when the todolist has no titel" do
		expect(TodoList.count).to eq(0)

		visit "/todo_lists"	
		click_link "New Todo list"
		expect(page).to have_content("New todo_list")

		fill_in "Title", with: ""
		fill_in "Description", with: "This is my first example"
		click_button "Create Todo list"

		expect(page).to have_content("error")
		expect(TodoList.count).to eq(0)

		visit "/todo_lists"
		expect(page).to_not have_content("This is my first example")

	end
	it "displays an error when the todolist has title less than 3" do
		expect(TodoList.count).to eq(0)

		visit "/todo_lists"	
		click_link "New Todo list"
		expect(page).to have_content("New todo_list")

		fill_in "Title", with: "Hi"
		fill_in "Description", with: "This is my first example"
		click_button "Create Todo list"

		expect(page).to have_content("error")
		expect(TodoList.count).to eq(0)

		visit "/todo_lists"
		expect(page).to_not have_content("This is my first example")

	end
end

