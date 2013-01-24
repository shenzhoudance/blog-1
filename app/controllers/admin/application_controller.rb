class Admin::ApplicationController < ApplicationController
  before_filter :authenticate_admin!
  protect_from_forgery
end