import { NavigationActions } from 'react-navigation'

export const navigateAndCleanStack = (routeName) => NavigationActions.reset({
  index: 0,
  key: null,
  actions: [NavigationActions.navigate({ routeName })]
})
