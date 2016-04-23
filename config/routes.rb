CatarseLbmGiftCards::Engine.routes.draw do
  resources :lbm_gift_cards, only: [], path: 'payment/lbm_gift_cards' do
	  member do
	    get :review
	    get :payment_form
	    post :pay
	  end
	end
end
