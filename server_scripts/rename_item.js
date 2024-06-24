ServerEvents.commandRegistry(event => {
	const { commands: Commands, arguments: Arguments } = event
	
    event.register(Commands.literal('renameItem')
		.requires(s => s.hasPermission(0))
		.then(Commands.argument('name', Arguments.GREEDY_STRING.create(event))
			.executes(c => rename(c.source.player.getMainHandItem(), Arguments.GREEDY_STRING.getResult(c, 'name')))
		))
	
	let rename = (itemStack, name) => {
		if (!itemStack.isEmpty()) {
			let newName = name.replace('&', '§') // Replace & with § for color codes
			itemStack.setHoverName(newName)
			return 1
		}
		
		return 0
	}		
})