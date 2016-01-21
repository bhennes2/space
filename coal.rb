require 'locomotive/coal'

client = Locomotive::Coal::Client.new('https://space-engine.herokuapp.com', { email: 'dev@launchpadlab.com', api_key: 'b72fa5406790fec0ab70a649a84aed2f5841c8f5' })
site = client.sites.by_handle('space')
site_client = client.scope_by(site)
pages = site_client.contents.missions.all({ _slug: :payvalet }, page: 1)
puts pages.inspect
