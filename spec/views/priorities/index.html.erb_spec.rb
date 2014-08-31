require 'spec_helper'

describe "priorities/index" do
  before(:each) do
    assign(:priorities, [
      stub_model(Priority,
        :priority => "Priority"
      ),
      stub_model(Priority,
        :priority => "Priority"
      )
    ])
  end

  it "renders a list of priorities" do
    render
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "tr>td", :text => "Priority".to_s, :count => 2
  end
end
