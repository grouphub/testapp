json.array!(@priorities) do |priority|
  json.extract! priority, :id, :priority
  json.url priority_url(priority, format: :json)
end
