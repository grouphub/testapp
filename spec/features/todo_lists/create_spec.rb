require 'spec_helper'

def create_todo_list(options{})
	options[:title] ||= "My todo list"
	options[:description] ||= "This is my todo list."

	visit "/todo_lists"	
	click_link "New Todo list"
	expect(page).to have_content("New todo_list")

	fill_in "Title", with: options[:title]
	fill_in "Description", with: options[:description]
	click_button "Create Todo list"
end
describe "Creating To Do Lists" do 
	it "redirects to the to do list index page on success" do
		create_todo_list

		expect(page).to have_content("My Test List")
	end
	it "displays an error when the todolist has no titel" do
		create_todo_list title:""

		expect(page).to have_content("error")
		expect(TodoList.count).to eq(0)

		visit "/todo_lists"
		expect(page).to_not have_content("This is my first example")

	end
	it "displays an error when the todolist has title less than 3" do
		expect(TodoList.count).to eq(0)

		create_todo_list title:"Hi"

		expect(page).to have_content("error")
		expect(TodoList.count).to eq(0)

		visit "/todo_lists"
		expect(page).to_not have_content("This is my first example")

	end
	it "displays an error when the todolist has no description" do
		expect(TodoList.count).to eq(0)

		visit "/todo_lists"	
		click_link "New Todo list"
		expect(page).to have_content("New todo_list")

		fill_in "Title", with: "My Test List 2"
		fill_in "Description", with: ""
		click_button "Create Todo list"

		expect(page).to have_content("error")
		expect(TodoList.count).to eq(0)

		visit "/todo_lists"
		expect(page).to_not have_content("This is my first example")

	end
	it "displays an error when the todolist has description less than 3" do
		expect(TodoList.count).to eq(0)

		visit "/todo_lists"	
		click_link "New Todo list"
		expect(page).to have_content("New todo_list")

		fill_in "Title", with: "My Test List 2"
		fill_in "Description", with: "food"
		click_button "Create Todo list"

		expect(page).to have_content("error")
		expect(TodoList.count).to eq(0)

		visit "/todo_lists"
		expect(page).to_not have_content("This is my first example")

	end
end

