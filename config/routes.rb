Rails.application.routes.draw do
  namespace :api do
    get 'users/retrieve/:username', :to => 'users#retrieve'
    resources :users do
      resources :contacts
    end
  end
end