import React from 'react'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog'

const UpdateProfileDialog = ({ open, setOpen }) => {
    return (
        <div>
            <Dialog>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Update profile</DialogTitle>
                    </DialogHeader>
                    <form>
                        <div className='grid gap-4 py-4'>
                            <Label htmlFor="name" className="text-right">Name</Label>
                            <Input
                                id="name"
                                name="name"
                                className="col-span-3"
                            />
                        </div>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default UpdateProfileDialog
