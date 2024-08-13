import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-game',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './game.component.html',
	styleUrl: './game.component.scss'
})
export class GameComponent {

	board: string[][] = [];
	currentPlayer: string = 'X';
	winner: string = '';
	draw: boolean = false;
	isBotGame: boolean = false;

	constructor() {
		this.newGame();
	}

	ngOnInit(): void { }

	newGame(): void {
		this.board = [
			['', '', ''],
			['', '', ''],
			['', '', '']
		];
		this.currentPlayer = 'X';
		this.winner = '';
		this.draw = false;
	}

	makeMove(row: number, col: number): void {
		if (!this.board[row][col] && !this.winner && !this.draw) {
			this.board[row][col] = this.currentPlayer;
			if (this.checkWinner()) {
				this.winner = this.currentPlayer;
			} else if (this.isBoardFull()) {
				this.draw = true;
			} else {
				this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
				if (this.isBotGame && this.currentPlayer === 'O') {
					this.makeBotMove();
				}
			}
		}
	}

	makeBotMove(): void {
		let bestMove = this.findBestMove();
		this.board[bestMove.row][bestMove.col] = 'O';
		if (this.checkWinner()) {
			this.winner = 'O';
		} else if (this.isBoardFull()) {
			this.draw = true;
		} else {
			this.currentPlayer = 'X';
		}
	}

	findBestMove(): { row: number, col: number } {
		let bestScore = -Infinity;
		let move = { row: 0, col: 0 };

		for (let row = 0; row < 3; row++) {
			for (let col = 0; col < 3; col++) {
				if (!this.board[row][col]) {
					this.board[row][col] = 'O';
					let score = this.minimax(this.board, 0, false);
					this.board[row][col] = '';
					if (score > bestScore) {
						bestScore = score;
						move = { row, col };
					}
				}
			}
		}

		return move;
	}

	minimax(board: string[][], depth: number, isMaximizing: boolean): number {
		const scores: { [key in 'X' | 'O' | 'draw']: number } = { X: -10, O: 10, draw: 0 };

		let result = this.checkWinnerForMinimax() as 'X' | 'O' | 'draw' | null;
		if (result !== null) {
			return scores[result];
		}

		if (isMaximizing) {
			let bestScore = -Infinity;
			for (let row = 0; row < 3; row++) {
				for (let col = 0; col < 3; col++) {
					if (!board[row][col]) {
						board[row][col] = 'O';
						let score = this.minimax(board, depth + 1, false);
						board[row][col] = '';
						bestScore = Math.max(score, bestScore);
					}
				}
			}
			return bestScore;
		} else {
			let bestScore = Infinity;
			for (let row = 0; row < 3; row++) {
				for (let col = 0; col < 3; col++) {
					if (!board[row][col]) {
						board[row][col] = 'X';
						let score = this.minimax(board, depth + 1, true);
						board[row][col] = '';
						bestScore = Math.min(score, bestScore);
					}
				}
			}
			return bestScore;
		}
	}

	checkWinnerForMinimax(): string | null {
		const lines = [
			[this.board[0][0], this.board[0][1], this.board[0][2]],
			[this.board[1][0], this.board[1][1], this.board[1][2]],
			[this.board[2][0], this.board[2][1], this.board[2][2]],

			[this.board[0][0], this.board[1][0], this.board[2][0]],
			[this.board[0][1], this.board[1][1], this.board[2][1]],
			[this.board[0][2], this.board[1][2], this.board[2][2]],

			[this.board[0][0], this.board[1][1], this.board[2][2]],
			[this.board[0][2], this.board[1][1], this.board[2][0]],
		];

		for (let i = 0; i < lines.length; i++) {
			const [a, b, c] = lines[i];
			if (a && a === b && a === c) {
				return a;
			}
		}

		if (this.isBoardFull()) {
			return 'draw';
		}
		return null;
	}

	checkWinner(): boolean {
		const result = this.checkWinnerForMinimax();
		if (result === 'X' || result === 'O') {
			this.winner = result;
			return true;
		} else if (result === 'draw') {
			this.draw = true;
			return false;
		}
		return false;
	}

	isBoardFull(): boolean {
		return this.board.every(row => row.every(cell => cell));
	}

	selectMode(isBotGame: boolean): void {
		this.isBotGame = isBotGame;
		this.newGame();
	}
}
