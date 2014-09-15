ActiveAdmin.register_page "Dashboard" do

  menu :priority => 1, :label => proc{ I18n.t("active_admin.dashboard") }

  content :title => proc{ I18n.t("active_admin.dashboard") } do
    # div :class => "blank_slate_container", :id => "dashboard_default_message" do
    #   span :class => "blank_slate" do
    #     span I18n.t("active_admin.dashboard_welcome.welcome")
    #     small I18n.t("active_admin.dashboard_welcome.call_to_action")
    #   end
    # end


  section "Recent Stories" do
    table_for Story.order("created_at desc").limit(5) do
      column :title do |story|
        link_to story.title, admin_story_path(story)
      end
      column :created_at
    end
    strong { link_to "View All Stories", admin_stories_path }
  end
  end # content
end
