CaliforniaFoodwaysApp::Application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)



# creates an API url
  namespace :api, defaults: {format: :json} do
    namespace :v1 do
      resources :stories, only: [:index]
      resources :locations, only: [:index]
    end
  end


root :to => 'home#index'

get "*path.html" => "home#index"
get "*path" => "home#index"

end
