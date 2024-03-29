require 'spec_helper'

describe "priorities/edit" do
  before(:each) do
    @priority = assign(:priority, stub_model(Priority,
      :priority => "MyString"
    ))
  end

  it "renders the edit priority form" do
    render

    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "form[action=?][method=?]", priority_path(@priority), "post" do
      assert_select "input#priority_priority[name=?]", "priority[priority]"
    end
  end
end
