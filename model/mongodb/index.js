
// models
const menu =require('./menu')
const role =require('./role')
const permission =require('./permission')
const uid =require('./uidPool')
const user =require('./user')
const upgrade =require('./upgrade')
const config =require('./config')
const dynamic =require('./dynamic')
const comment =require('./comment')
const category =require('./category')
const report =require('./report')
const article =require('./article')
const collect =require('./collect')
const code =require('./code')
const follow =require('./follow')
const like =require('./like')
const topic =require('./topic')
const group =require('./group')
const groupMessage =require('./groupMessage')
const single_message =require('./single_message')
const notice =require('./join_notice')
const member =require('./member')
const conversation =require('./conversation')
module.exports= {
	menu,
	role,
	permission,
	uid,
	user,
	code,
	upgrade,
	config,
	dynamic,
	comment,
	category,
	report,
	article,
	collect,
	follow,
	like,
	group,
	groupMessage,
	notice,
	member,
	conversation,
	single_message,
	topic
}
