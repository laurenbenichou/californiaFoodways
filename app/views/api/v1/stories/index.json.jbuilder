json.stories @stories do |story|
  json.(story, :title, :image, :content, :soundcloud_url, :tags, :story_type)

  json.author do |json|
    json.(story.author, :first_name, :last_name)
  end

  json.location do |json|
    json.(story.location, :county)
  end

end

