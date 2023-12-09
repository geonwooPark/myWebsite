import { create } from 'zustand'

interface State {
  commentId: string
}

interface Actions {
  onChange: (id: string) => void
}

const useSelectedCommentForEdit = create<State & Actions>()((set) => ({
  commentId: '',
  onChange: (id) => set({ commentId: id }),
}))

export default useSelectedCommentForEdit