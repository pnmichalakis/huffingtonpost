require 'bundler'
Bundler.require

require 'dotenv'
Dotenv.load

get '/' do
	client = Twitter::REST::Client.new do |config|
  	config.consumer_key        = ENV['CONSUMERKEY']
  	config.consumer_secret     = ENV['CONSUMERSECRET']
  	config.access_token        = ENV['ACCESSTOKEN']
  	config.access_token_secret = ENV['ACCESSTOKENSECRET']
	end
	trends = client.get("https://api.twitter.com/1.1/trends/place.json?id=1")
	binding.pry
	trends_name_array = trends.first[:trends].map do |trend|
												trend[:name]
											end
	erb :index
end