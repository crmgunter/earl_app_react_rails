Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
Rails.application.routes.draw do
  namespace :api do
    resources :shifts do
      resources :employees
    end
  end
end

end
