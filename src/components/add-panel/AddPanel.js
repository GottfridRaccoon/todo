import React from 'react'
import { TextField } from '@material-ui/core'

import Button from '@material-ui/core/Button';
import './AddPanel.css'


const AddPanel = ({ createItem }) => {

	const [textOfTask, textChange] = React.useState({
		text: ""
	})
	const propChange = (e) => textChange({ text: e.target.value })
	const onSubmit = (e) => {
		e.preventDefault()
		if (textOfTask.text.trim() !== "") {

			createItem(textOfTask.text)
			textChange({ text: "" })
		}
	}
	return (
		<form onSubmit={onSubmit} className="addpanel">
			<div className="addpanel-wrapper__textfield">
				<TextField onChange={(e) => propChange(e)} value={textOfTask.text} className="addpanel__textfield" />
			</div>
			<div className="addpanel-wrapper__button">
				<Button variant="contained" color="primary" type="submit">
					Добавить
				</Button>
			</div>
		</form>

	)
}
export default AddPanel