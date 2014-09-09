json.stories @stories do |story|
  json.title story.title
  json.content story.content
  json.tags story.tags
  json.track_id story.track_id
  json.story_type story.story_type
  json.published story.published

  json.author do |json|
    json.(story.author, :first_name, :last_name)
  end

  json.location do |json|
    json.(story.location, :county)
  end
end

