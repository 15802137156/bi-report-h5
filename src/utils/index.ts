/**
 * set document title when router change
 * @param {String} title title name
 */
export function setTitle(title: any) {
  document.title = title;
  const iframe = document.createElement('iframe');
  iframe.style.visibility = 'hidden';
  iframe.style.width = '1px';
  iframe.style.height = '1px';
  const iframeCallback = () => {
    setTimeout(() => {
      iframe.removeEventListener('load', iframeCallback);
      document.body.removeChild(iframe);
    }, 0);
  };
  iframe.addEventListener('load', iframeCallback);
  document.body.appendChild(iframe);
}

/**
 * 时间戳格式化.
 * @param  {number} time 时间戳 .
 * @param  {string} formatStr 格式 .
 * @param  {boolean} ms 时间戳是否是秒为单位, 10位true, 13位false .
 * @return {string} 格式化后的字符串.
 */
export function format(time: any, formatStr: any, ms: any) {
  const t = new Date(ms ? time * 1000 : time);
  const tf = function addZero(i: number) {
    return (i < 10 ? '0' : '') + i;
  };
  return formatStr.replace(/yyyy|MM|dd|HH|mm|ss/g, (a: string) => {
    switch (a) {
      case 'yyyy':
        return tf(t.getFullYear());
      case 'MM':
        return tf(t.getMonth() + 1);
      case 'mm':
        return tf(t.getMinutes());
      case 'dd':
        return tf(t.getDate());
      case 'HH':
        return tf(t.getHours());
      case 'ss':
        return tf(t.getSeconds());
      default:
        return '';
    }
  });
}

// 节流
export function throttle(fn: Function, delay: any) {
  var last = 0
  return () => {
    // @ts-ignore
    var context = this
    var args = arguments
    var now = new Date().getTime()
    if (now - last >= delay) {
      last = now;
      fn.apply(context, args)
    }
  }
}

/**
 * 千分符
 * @param value
 */
export const thousandsFmt = (value: any) => {
  if (value === null || value === undefined) return ''
  const num = (value || 0).toString(10).replace(/(\d{1,3})(?=(\d{3})+$)/g, '$1,')
  return num
}
