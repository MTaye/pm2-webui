async function pm2AppAction(BASEURL, appName, action){
    await fetch(`${BASEURL}/api/apps/${appName}/${action}`, { method: 'POST'})
    location.reload();
}