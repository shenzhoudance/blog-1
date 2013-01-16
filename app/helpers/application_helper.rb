module ApplicationHelper
  def markdown(text)
      BlueCloth::new(text).to_html
  end
end
