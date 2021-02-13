import QuickPaper from 'quick-paper';

// 控制显示隐藏
import ctrlShow from './ctrl-show'; QuickPaper.directive('ctrlShow', ctrlShow);

// 两边缩放的线条
import moveLine from './move-line'; QuickPaper.directive('moveLine', moveLine);

// 控制class在body上的添加和删除
import ctrlBodyClass from './ctrl-body-class'; QuickPaper.directive('ctrlBodyClass', ctrlBodyClass);

// 控制class active的添加和删除
import ctrlActiveClass from './ctrl-active-class'; QuickPaper.directive('ctrlActiveClass', ctrlActiveClass);