xml.instruct! :xml, :version => "1.0" 
xml.rss :version => "2.0" do
  xml.channel do
    xml.title ""
    xml.description "A lifelong learner."
    xml.link posts_url

    for post in @posts
      xml.item do
        xml.title post.title
        xml.description post.content
        xml.pubDate post.created_at.to_s(:rfc822)
        xml.link slug_path(post.slug)
        xml.guid slug_path(post.slug)
      end
    end
  end
end 
