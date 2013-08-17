Package.describe({
  summary: "Greenlight create site template"
});

Package.on_use(function (api, where) {

    api.use('router', ['client', 'server']);
    api.use(['templating'], 'client');
    api.use('deps', ['client', 'server']);
    api.use('session', ['client', 'server']);
    api.use('greenlight', ['client','server']);

    api.add_files('lib/jquery.masonry.js', 'client');
    api.add_files('client/collection_item.css', 'client');
    api.add_files('client/collection_item.html', 'client');
    api.add_files('client/collection_item.js', 'client');
    api.add_files('client/user_item.css', 'client');
    api.add_files('client/user_item.html', 'client');
    api.add_files('client/user_item.js', 'client');
    api.add_files('client/pending.css', 'client');
    api.add_files('client/pending.html', 'client');
    api.add_files('client/pending.js', 'client');
    api.add_files('client/select_collections.css', 'client');
    api.add_files('client/select_collections.html', 'client');
    api.add_files('client/select_collections.js', 'client');
    api.add_files('client/select_template.css', 'client');
    api.add_files('client/select_template.html', 'client');
    api.add_files('client/select_template.js', 'client');
    api.add_files('client/select_url.css', 'client');
    api.add_files('client/select_url.html', 'client');
    api.add_files('client/select_url.js', 'client');
    api.add_files('client/select_users.css', 'client');
    api.add_files('client/select_users.html', 'client');
    api.add_files('client/select_users.js', 'client');
    api.add_files('client/template_item.css', 'client');
    api.add_files('client/template_item.html', 'client');
    api.add_files('client/template_item.js', 'client');

    api.add_files('client/create.css', 'client');
    api.add_files('client/create.html', 'client');
    api.add_files('client/create.js', 'client');

    api.add_files('server/create.js', 'server');
});

Package.on_test(function (api) {
    api.add_files('create_tests.js', 'client');
});
