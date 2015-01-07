require 'bundler'
Bundler.require

require 'dotenv'

get '/' do
	erb :index
end