/**
 * 处理思考标签
 * @param {string} content - 包含思考标签的内容
 * @returns {string} - 处理后的内容
 */
export function processThinkTags(content) {
  // 替换<think>标签为带样式的div
  return content.replace(/<think>([\s\S]*?)<\/think>/g, '<div class="think-content">$1</div>');
}

/**
 * 平滑滚动到底部
 * @param {Object} scrollRef - 滚动容器的引用
 */
export function smoothScrollToBottom(scrollRef) {
  if (!scrollRef) return;
  
  // 使用nextTick确保DOM已更新
  setTimeout(() => {
    const scrollView = uni.createSelectorQuery().select(scrollRef);
    if (scrollView) {
      scrollView.boundingClientRect(data => {
        if (data) {
          uni.pageScrollTo({
            scrollTop: data.height,
            duration: 300
          });
        }
      }).exec();
    }
  }, 100);
}