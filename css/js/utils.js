* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: "Songti SC", "SimSun", serif;
    background: linear-gradient(135deg, #2c2416 0%, #3d3226 100%);
    min-height: 100vh;
    color: #3d3226;
    line-height: 1.8;
}

.container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 20px;
}

/* 标题栏 */
.title-bar {
    text-align: center;
    padding: 30px 20px;
    background: linear-gradient(135deg, #5d4e37 0%, #3d3226 100%);
    border-radius: 20px;
    margin-bottom: 20px;
    color: #f5f0e8;
}

.title-bar h1 {
    font-size: 2em;
    margin-bottom: 10px;
    letter-spacing: 4px;
}

.subtitle {
    font-size: 1.1em;
    color: #d4a574;
    font-style: italic;
}

/* 章节导航 */
.chapter-nav {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 20px;
}

.chapter-btn {
    padding: 15px 35px;
    font-size: 1.1em;
    background: rgba(93, 78, 55, 0.3);
    border: 2px solid rgba(93, 78, 55, 0.5);
    border-radius: 12px;
    color: #f5f0e8;
    cursor: pointer;
    transition: all 0.3s;
    font-family: inherit;
}

.chapter-btn:hover:not(.locked) {
    background: rgba(93, 78, 55, 0.6);
    transform: translateY(-2px);
}

.chapter-btn.active {
    background: linear-gradient(135deg, #5d4e37 0%, #7a6550 100%);
    border-color: #d4a574;
}

.chapter-btn.locked {
    opacity: 0.5;
    cursor: not-allowed;
}

.lock-icon {
    margin-left: 8px;
}

/* 总体进度 */
.overall-progress {
    background: rgba(93, 78, 55, 0.3);
    padding: 15px 25px;
    border-radius: 12px;
    margin-bottom: 20px;
}

.progress-track {
    height: 12px;
    background: rgba(93, 78, 55, 0.5);
    border-radius: 6px;
    overflow: hidden;
    margin-bottom: 10px;
}

.progress-fill {
    height: 100%;
    background: linear-gradient(90deg, #d4a574 0%, #a0825a 100%);
    transition: width 0.6s ease;
    width: 0%;
}

.progress-text {
    text-align: center;
    color: #f5f0e8;
    font-size: 1.05em;
}

/* 章节内容 */
.chapter-content {
    display: none;
}

.chapter-content.active {
    display: block;
}

/* 双栏布局（第一章） */
.dual-world {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-bottom: 20px;
}

.world-panel {
    background: linear-gradient(to bottom, #faf8f3 0%, #f5f2ed 100%);
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 8px 30px rgba(0,0,0,0.3);
}

.world-header {
    padding: 25px;
    text-align: center;
    color: #faf8f3;
}

.world-header.rural {
    background: linear-gradient(135deg, #8b7355 0%, #5d4e37 100%);
}

.world-header.urban {
    background: linear-gradient(135deg, #4a5568 0%, #2d3748 100%);
}

.world-icon {
    font-size: 2.5em;
    margin-bottom: 10px;
}

.world-title {
    font-size: 1.5em;
    font-weight: 700;
    letter-spacing: 2px;
}

.world-time {
    font-size: 0.95em;
    margin-top: 8px;
    opacity: 0.9;
}

.scene-content {
    padding: 30px;
    min-height: 400px;
}

.scene-desc {
    font-size: 1.05em;
    line-height: 2;
    color: #4a3f32;
    margin-bottom: 25px;
    text-indent: 2em;
}

.situation {
    background: linear-gradient(135deg, #fff9f0 0%, #fef5e8 100%);
    border-left: 4px solid #a0825a;
    padding: 20px;
    margin: 20px 0;
    border-radius: 0 12px 12px 0;
}

.situation-title {
    font-weight: 700;
    color: #5d4e37;
    margin-bottom: 12px;
    font-size: 1.1em;
}

.choice-btn {
    display: block;
    width: 100%;
    padding: 18px 25px;
    margin-bottom: 12px;
    background: linear-gradient(135deg, #faf8f3 0%, #f5f0e8 100%);
    border: 2px solid rgba(93, 78, 55, 0.15);
    border-radius: 12px;
    color: #4a3f32;
    font-size: 1em;
    text-align: left;
    cursor: pointer;
    transition: all 0.3s;
    font-family: inherit;
}

.choice-btn:hover:not(:disabled) {
    background: linear-gradient(135deg, #f5f0e8 0%, #ebe5dc 100%);
    border-color: #a0825a;
    transform: translateX(6px);
}

.choice-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

.result-box {
    background: linear-gradient(135deg, #c8e6c9 0%, #a5d6a7 100%);
    border: 2px solid #66bb6a;
    border-radius: 15px;
    padding: 25px;
    margin-top: 20px;
    color: #1b5e20;
    animation: slideDown 0.5s ease;
}

@keyframes slideDown {
    from { opacity: 0; transform: translateY(-20px); }
    to { opacity: 1; transform: translateY(0); }
}

.insight-unlock {
    background: linear-gradient(135deg, #fff9f0 0%, #fef5e8 100%);
    border: 3px solid #d4a574;
    border-radius: 20px;
    padding: 20px 25px;
    margin: 20px 0;
    text-align: center;
}

.insight-icon {
    font-size: 2.5em;
    margin-bottom: 8px;
}

.insight-title {
    font-size: 1.3em;
    color: #5d4e37;
    font-weight: 700;
    margin-bottom: 12px;
}

.insight-content {
    font-size: 1.05em;
    line-height: 1.7;
    color: #4a3f32;
    text-align: left;
    background: rgba(255,255,255,0.6);
    padding: 15px 18px;
    border-radius: 12px;
    margin-bottom: 12px;
}

.insight-content p {
    margin-bottom: 8px;
}

.insight-content strong {
    color: #5d4e37;
    font-weight: 700;
}

.insight-tag {
    display: inline-block;
    background: #a0825a;
    color: #faf8f3;
    padding: 6px 16px;
    border-radius: 20px;
    margin: 6px 4px 0 4px;
    font-size: 0.95em;
    font-weight: 600;
}

.next-btn {
    width: 100%;
    padding: 20px;
    font-size: 1.2em;
    background: linear-gradient(135deg, #5d4e37 0%, #7a6550 100%);
    border: none;
    border-radius: 15px;
    color: #faf8f3;
    cursor: pointer;
    font-weight: 700;
    font-family: inherit;
    margin-top: 20px;
    letter-spacing: 2px;
    transition: all 0.3s;
}

.next-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(93, 78, 55, 0.4);
}

.hidden {
    display: none !important;
}

/* 通知 */
.notify {
    position: fixed;
    top: 25px;
    right: 25px;
    padding: 18px 28px;
    border-radius: 12px;
    z-index: 1000;
    max-width: 380px;
    animation: slideIn 0.4s ease;
    background: #c8e6c9;
    border: 2px solid #81c784;
    color: #2e7d32;
}

@keyframes slideIn {
    from { transform: translateX(120%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
}

/* 响应式 */
@media (max-width: 1024px) {
    .dual-world {
        grid-template-columns: 1fr;
    }
}
